# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [1.17.2 - 2019-11-15
### Changed
- Styles of `NotFound` component added to _all.scss

## [1.17.1 - 2019-11-12
### Changed
- Fixed display issue of `NotFound` component with no title and subtitle
- Fixed tests of `NotFound` component

## [1.17.0] - 2019-11-12
### Added
- `NotFound` component added

## [1.16.0] - 2019-11-11
### Added
- `Countdown` component added

## [1.15.10] - 2019-10-31
### Added
- new variant type added to `Button` component
### Changed
- Left and right padding of `Button` component increased to 10px from 5px

## [1.15.9] - 2019-10-25
### Fixed
- Fixed z-index styles of `Loader` and `PopUp` components

## [1.15.8] - 2019-10-23
### Fixed
- Fixed undefined className case on Modal.Content

## [1.15.7] - 2019-10-16
### Added
- `contentClassName` prop is added to Popup component to be able to control content style of Popup.

## [1.15.6] - 2019-10-10
### Added
- `fullScreen` prop is added to Layout component. `rightIconSize` and `leftIconSize` props are added to SubHeader component.

## [1.15.5] - 2019-10-02
### Changed
- padding is removed from `.left-icon` class

## [1.15.4] - 2019-09-24
### Changed
- react and react-dom package version updated to 16.9.0

## [1.15.3] - 2019-08-29
### Refactor
- style file structure

## [1.15.2] - 2019-08-28
### Fix
- `subheader` height and title lineheight

## [1.15.1] - 2019-08-27
### Added
- `bottom sheet` component added
### Changed
- `layout` background color changed

## [1.14.7] - 2019-08-22
### Added
- `rating` component added
- `accordion group` component added
- new color variables added
- subtitle type added to `typography`
### Changed
- `button` and `link` sizes changed
- `icon` sizes changed
- `subheader` align properties changed
- some color variables changed
### Fix
- `button` ripple and fluid bug fixed


## [1.12.3] - 2019-08-07
### Added
- `showUnder` and `duration` props to `scrollToTop` component
### Changed
- `ripple` transition timing

## [1.12.1] - 2019-08-05
### Fixed
- `fluid` prop of the `button` component

## [1.12.0] - 2019-08-05
### Added
- `badge` component
### Changed
- `ripple` component

## [1.11.8] - 2019-08-05
### Changed
- Downgrade react version to 16.3.2

## [1.11.7] - 2019-08-05
### Changed
- `scroll-to-top` width and height
- reboot.css styles

### Removed
- `scroll-to-top` animation

## [1.11.4] - 2019-08-01
### Added
- `bootstrap` styles are added and their mixins are exported
### Changed
- `subheader` component iconOnClick function type

## [1.11.2] - 2019-07-31
### Fixed
- Fix `ripple`

## [1.11.1] - 2019-07-31
### Fixed
- Fix `ripple` with additional classNames

## [1.11.0] - 2019-07-31
### Added
- `ripple` higher order component added

## [1.10.7] - 2019-07-31
### Added
- `scroll-to-top` component added
- `white` color now set to #fff

### Changed
- `select` component takes `selected` prop to identify selected element
- `ripple` effect in `button` component does not affect background color anymore
- `ripple` effect transform time reduced to .3s from .5s

### Fix
- The components that do not extend `div` element now extends
- `Use default value instead` warning resolved in `select` component
- `Subheader` styles fixed

## [1.9.4] - 2019-07-30
### Added
- `display` types to typography

### Changed
- `icon` component class name

### Fix
- `select` component error style

## [1.9.1] - 2019-07-29
### Added
- `color` prop added to `icon` and `typography` components
- `link` component added

### Changed
- `select` components styles

## [1.8.4] - 2019-07-25
### Added
- `subheader` component added
- `body` variant type added to `typography` component
- `flex` and `text-truncate` mixins

### Changed
- `layout` background color
- `button` padding

## [1.7.4] - 2019-07-24
### Added
- `typography` component added
- button-loading animation added
- `xlarge` prop added to `icon` component
- `disabled` and `error` props added to `select` component

### Changed
- loading animation
- ripple effect in `button` component

## [1.6.9] - 2019-07-12
### Added
- Added `accordion` component
- Added `ripple` prop to button component
- Added `list` component
- Added `color` prop to icon component
- Added `variant` prop to icon component
- Added `loader` component
- Added `switch` component
- Added `layout` component

### Changed
- Fixed `radio` component line height and padding styles
- `ripple` effect in `button` component set to true by default
- `q-` prefix added to style class names
- `button` component height is set to 44px

### Removed
- Removed unnecessary props from `select` component
- Subtext prop removed from `select` component

## [1.1.3] - 2019-07-12
### Added
- `className` prop to all components
- `coverage` shield to readme
-  Added `loader` component

### Changed
- Changed node-sass from dev-dependencies to dependencies

## [1.0.5] - 2019-07-11
### Added
- `circular` prop to `button` component

## [1.0.4] - 2019-07-10
### Added
- `docsify` document has been added
### Changed
- storybook folder name changed to story from docs

## [1.0.2] - 2019-07-11
### Changed
- fix of img height problem in safari
### Removed
- `sass-loader` package removed from dev-dependencies

## [1.0.0] - 2019-07-10
### Added
- npm package published

## [0.4.11] - 2019-07-10
### Added
- `lint-staged` package to fix indentation errors before
  each commit
### Changed
- `popup` component is no longer using react hooks
- all component's style changed based on the styling guide
### Removed
- `prettier` removed to fix conflicts with tslint configuration


## [0.4.7] - 2019-07-09
### Added
- `husky` package added to configure precommit and prepush

## [0.4.6] - 2019-07-04
### Changed
- `README.md` updated
- `docsify` updated
### Added
- `label` prop to `input` component

## [0.4.3] - 2019-07-03
### Changed
- `input` component is now cannot be type radio and checkbox
### Added
- `radio` component and `radio` tests added
- `checkbox` component and `checkbox` tests added

## [0.3.7] - 2019-07-01
### Changed
- `button` tests are now using sandbox spy
- `input` tests are now using sandbox spy
- `input` tests are now using shallow instead of mount
### Added
- `popup` component and `popup` tests added
- `show` prop added to `popup` component
- `children` prop added to `popup` component
- `isModal` prop added to `popup` component

## [0.2.4] - 2019-06-27
### Added
- `input` component and `input` tests added
- `size` prop added to `input` component
- `error` prop added to `input` component
- `fluid` prop added to `input` component


## [0.1.5] - 2019-06-27
### Changed
- `onClick` prop in `button` component changed to required

### Added
- `size` prop added to `button` component
- `variant` prop added to `button` component
- `fluid` prop added to `button` component
- `disabled` prop added to `button` component

## [0.1.1] - 2019-06-27
### Added
- configuration of `tslint` and `prettier` added
- `button` component and `button tests` added


## [0.0.6] - 2019-06-27
### Added
- this CHANGELOG is created to keep track of open source
  react UI Library project quarkify
- `components` folder added
- `styles` folder added
- `mixins scss` and `components scss` added
- `utils` folder added
- `stories` folder added

