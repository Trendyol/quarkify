import React, { PureComponent } from "react";
import { DATE_STRINGS, INTERVAL_HANDLER_TIME } from "../../enums/countdown";
import IDiv from "../../interfaces/div";

export default class Countdown extends PureComponent<ICountdownProps, any> {
  private timeoutHandler: any = null;

  constructor(props: ICountdownProps) {
    super(props);
    this.state = {
      intervalHandler: null,
      remainingDays: "",
      remainingHours: "",
      remainingMinutes: "",
      remainingSeconds: "",
      visible: false,
    };
  }

  public componentDidMount() {
    if (Date.now() + this.props.threshold >= this.props.endDate) {
      this.updateCountdown();
      this.setState({
        intervalHandler: setInterval(this.updateCountdown.bind(this), INTERVAL_HANDLER_TIME),
      });
    } else {
      const timeToStartShowingCountdown = Math.min(
        Math.max(this.props.endDate - (Date.now() + this.props.threshold), 0),
        Number.MAX_SAFE_INTEGER,
      );
      this.timeoutHandler = setTimeout(() => {
        this.setState({
          intervalHandler: setInterval(this.updateCountdown.bind(this), INTERVAL_HANDLER_TIME),
        });
      }, timeToStartShowingCountdown);
    }
  }

  public componentWillUnmount() {
    if (this.timeoutHandler) {
      clearTimeout(this.timeoutHandler);
    }
    if (this.state.intervalHandler) {
      clearInterval(this.state.intervalHandler);
    }
  }

  public render() {
    const {
      day = DATE_STRINGS.DAY,
    } = this.props;
    const countdown = () => (
      <div>
        {this.state.remainingDays > 0 ?
          <span>
            <span>{this.state.remainingDays}</span>
            <span>&nbsp;{day}&nbsp;</span>
            {<span>{this.padNumber(this.state.remainingHours)}<span>:</span></span>}
            {<span>{this.padNumber(this.state.remainingMinutes)}<span>:</span></span>}
          </span> : this.renderHoursAndMinutes()
        }
        <span>{this.padNumber(this.state.remainingSeconds)}</span>
      </div>
    );
    return this.state.visible ? countdown() : null;
  }

  private padNumber(n: any) {
    return n > 9 ? `${n}` : `0${n}`;
  }

  private updateCountdown() {
    const {
      gmt = 0,
    } = this.props;
    const remainingTime = this.props.endDate - Date.now();
    if (remainingTime <= 0) {
      return this.setState({
        remainingDays: 0,
        remainingHours: 0,
        remainingMinutes: 0,
        remainingSeconds: 0,
        visible: false,
      });
    }

    const remainingSeconds = Math.floor((remainingTime / 1000) % 60);
    const remainingMinutes = Math.floor((remainingTime / (1000 * 60)) % 60);
    const remainingHours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24) + gmt;
    const remainingDays = Math.floor(remainingTime / (((1000 * 60 * 60) + gmt) * 24));

    return this.setState({
      remainingDays,
      remainingHours,
      remainingMinutes,
      remainingSeconds,
      visible: true,
    });
  }

  private renderHoursAndMinutes() {
    const {
      hour = DATE_STRINGS.HOUR,
      minute = DATE_STRINGS.MINUTE,
    } = this.props;
    if (this.state.remainingHours > 0) {
      return (
        <span>
          <span>{this.state.remainingHours}<span>&nbsp;{hour}&nbsp;</span></span>
          <span>{this.padNumber(this.state.remainingMinutes)}</span>
          <span>:</span>
        </span>
      );
    }
    return <span>{this.padNumber(this.state.remainingMinutes)} <span>&nbsp;{minute}&nbsp;</span></span>;
  }
}

interface ICountdownProps extends IDiv {
  className?: string;
  gmt?: number;
  endDate: number;
  threshold: number;
  day?: string;
  hour?: string;
  minute?: string;
}
