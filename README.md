# Stockport Styleguide [![Github All Releases](https://img.shields.io/github/downloads/atom/atom/total.svg?style=flat-square)](https://github.com/smbc-digital/stockport-styleguide)

Stockport styleguide is a React application to showcase the reusable components for the Stockport Council website. This project contains both the SASS styleing of the components and a showcase of the [smbc-react-components](https://www.npmjs.com/package/smbc-react-components) used within the Council's website.

## Installation

### Requirements

* Node
* npm

`$ npm run setup`

## Usage

```html
<button class="button-primary">Next step</button>
```

```css
.button-primary {
    @extend .button;
    @include button-colors($teal-darker, $white);
}
```

```css
@mixin button-colors ($buttonColour, $textColour) {
    color: $textColour;
    background-color: $buttonColour;

    a {
        color: $textColour;
    }

    &:hover, &:focus {
        background-color: lighten($buttonColour, 5%);
    }

    &:active {
        background-color: darken($buttonColour, 5%);
    }
}
```

## Development

Within the package.json file there is a pre-commit that will run `npm run build` which bundles up the packages and adds them to the commit.

## Roadmap

There are different sections to the styleguide that have been styled but not yet been made into react components.

| Mark | Description |
| --- | --- |
| bullet | work not started |
| check mark | work completed |
| :runner: | on-going work |

* :runner: Buttons
* :runner: Inputs
* :ballot_box_with_check: Typography
* Icons
* Navigation
* Tables
* Alerts
* Profiles

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)