# 🔮 Fortune

### Your friendly CSS framework.  
[![](https://data.jsdelivr.com/v1/package/npm/fortune-css/badge)](https://www.jsdelivr.com/package/npm/fortune-css)

Fortune helps prototype sites by providing a set of non-blocking utilities and basic components.

- ⚡️  Light-weight at < 10kb gzipped
- ⛔️  No preprocessor required
- 📐  Easy CSS grids & flexbox
- 🌈  Customizable CSS variables

To load Fortune via CDN, add this to your `<head>`:  
```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fortune-css/dist/fortune.min.css">
```  

To theme your site, add `:root` or `:scope` to your CSS:
```
:root {
  --font-family: 'Roboto', sans-serif;
  --headings-font-family: 'Roboto', sans-serif;
  --container-width: 125em;
  --column-gutter: var(--space-4);
}
```

## Fortune Cheat Sheet

### Tokens

Gap `--gap-* | rem | 0-0.75rem`  
Space `--space-* | rem | 0-10rem`  
Color `--color | #001f3f`  
State `--state-& | primary | secondary | info | success | warning | danger | light | dark | disabled`  
Darken `--darken-* | rgba`  
Lighten `--lighten-* | rgba`  
Component `--component-* | background-color | border-color | border-radius | border-width | focus | padding | transition | font-size`

### Components
Alert `.alert || --alert-*`  
Badge `.badge | --badge-*`  
Button `.button || --button-* | font-family | font-size | font-weight | color | bg-color | border-radius | border-width | bg-color | focus`  
Form `fieldset | label | input | select | textarea | .input-field | .input-group | .input-hint | .input-addon | .input-icon | .input-invalid | .input-valid || --input-* | --fieldset-* | --label-*`  
List `.list-* | .list-step | .list-breadcrumb | .list-dropdown`  
Nav `.nav | .nav-left | .nav-center | .nav-right || --nav-*`
Tab `.tab | .tab-full | .tab-simple || --tab-*`  
Table `table | .table-bordered | .table-hoverable | .table-striped || --table-*`  
Text `body | a | abbr | blockquote | code | del | figure | h* | hr | img | ins | kbd | mark | p | pre | .pre | .pre-line | .pre-wrap | .nowrap | .small | sub | sup | .ellipsis | .italic | .normal | .oblique | .thin | .regular | .medium | .bold | .muted | .center | .justify | .left | .right | .line-through | .overline | .underline | .capitalize | .lowercase | .uppercase | .break-word`  

### Utilities
Border `.radius-* | .b-*`  
Blend `.gradient-* | bg-blend-`  
Color `.* | bg-* | border-*`  
Column `.cols | .cols-flush | .col | .col-* | .offset-* | .multi-col-* || --column-gutter | --columns-width`  
Dimension `.h-* | .minvh-* | .w-* | .minvw-*`  
Display `.clearfix | .grid | .block | .flex | .inline | .inline-block | .inline-flex | .inline-table | .none | .table | .table-cell | .table-colun | .table-row | .float-* | .absolute | .fixed | .relative | .sticky | .bottom-* | .left-* | .right-* | .top-* | .z-* | .overflow-hidden | .overflow-scroll`  
Flex `.flex-wrap | .flex-wrap-reverse | .flex-reverse | .flexcolumn | .flex-center`
