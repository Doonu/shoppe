(self.webpackChunkshoppe=self.webpackChunkshoppe||[]).push([[792],{"./node_modules/@storybook/instrumenter/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/instrumenter/dist sync recursive",module.exports=webpackEmptyContext},"./storybook-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CHANNELS_=__webpack_require__("storybook/internal/channels");const importers=[async path=>{if(!/^\.[\\/](?:src(?:[\\/](?!\.)(?:(?:(?!(?:^|[\\/])\.).)*?)[\\/]|[\\/]|$)(?!\.)(?=.)[^\\/]*?\.stories\.(js|jsx|mjs|ts|tsx))$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$")("./"+pathRemainder)}];const channel=(0,external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({page:"preview"});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),"DEVELOPMENT"===external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE&&(window.__STORYBOOK_SERVER_CHANNEL__=channel);const preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb((async function importFn(path){for(let i=0;i<importers.length;i++){const moduleExports=await(x=()=>importers[i](path),x());if(moduleExports)return moduleExports}var x}),(()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("./node_modules/@storybook/react/dist/entry-preview.mjs"),__webpack_require__("./node_modules/@storybook/react/dist/entry-preview-docs.mjs"),__webpack_require__("./node_modules/@storybook/addon-links/dist/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/docs/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/actions/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/viewport/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/measure/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/outline/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/preview.mjs"),__webpack_require__("./config/storybook/preview.tsx")])));window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel},"./node_modules/@storybook/test/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/test/dist sync recursive",module.exports=webpackEmptyContext},"./config/storybook/preview.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{decorators:()=>decorators,default:()=>storybook_preview,parameters:()=>parameters});const theme_dark="Темная тема",theme_light="Светлая тема",OptionsTheme=t=>[{title:t(theme_dark),value:"dark",label:t(theme_dark)},{title:t(theme_light),value:"light",label:t(theme_light)}],antdTheme=theme=>({token:{fontFamily:"Roboto",colorPrimary:theme.core.colorPrimary,colorBgLayout:theme.core.colorBackground,colorPrimaryText:theme.core.colorTextPrimary,colorTextSecondary:theme.core.colorTextSecondary},components:{Select:{selectorBg:theme.core.colorBackground,colorTextPlaceholder:theme.core.colorPrimary,optionActiveBg:theme.core.colorAccentPrimary,optionSelectedBg:theme.core.colorTextSecondary,optionSelectedColor:theme.core.colorBackground,colorTextQuaternary:theme.core.colorPrimary,colorText:theme.core.colorPrimary,colorBgElevated:theme.core.colorBackground},Drawer:{colorBgElevated:theme.core.colorBackground},Slider:{railBg:theme.core.colorAccentPrimary,railHoverBg:theme.core.colorSurface,trackBg:theme.core.colorPrimary,handleColor:theme.core.colorPrimary},Menu:{colorBgContainer:theme.core.colorBackground,itemSelectedBg:"transparent",itemSelectedColor:theme.core.colorSecondary,itemColor:theme.core.colorPrimary},Tabs:{itemColor:theme.core.colorPrimary,itemSelectedColor:theme.core.colorPrimary,colorBorderSecondary:"transparent"},Button:{colorBgContainer:theme.core.colorBackground,colorText:theme.core.colorTextPrimary,borderRadius:4,defaultHoverBg:theme.core.colorPrimary,colorPrimaryHover:theme.core.colorBackground},Switch:{handleBg:theme.core.colorBackground,colorTextQuaternary:theme.core.colorTextSecondary}}});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");styled_components_browser_esm.DU`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;

        &::-webkit-scrollbar {
            position: absolute;
            width: 10px;
            left: 0;
        }

        &::-webkit-scrollbar-thumb {
            border-radius: 24px;
        }

        &::-webkit-scrollbar-track {
        }
    }

    .ant-modal-mask, .ant-drawer-mask {
        backdrop-filter: blur(2px);
    }
    
    * {
        padding: 0;
        margin: 0;
        border: none;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
    
    a, a:link, a:visited {
        text-decoration: none;
    }

    a:hover {
        text-decoration: none;
    }
    
    aside, nav, footer, header, section, main {
        display: block;
    }

    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
        font-size: inherit;
        font-weight: inherit;
    }

    ul, ul li {
        list-style: none;
    }

    img {
        vertical-align: top;
    }

    img, svg {
        max-width: 100%;
        height: auto;
    }

    address {
        font-style: normal;
    }

    input, textarea, button, select {
        font-family: inherit;
        font-size: inherit;
        color: inherit;
        background-color: transparent;
    }

    input::-ms-clear {
        display: none;
    }

    button, input[type="submit"] {
        display: inline-block;
        box-shadow: none;
        background: transparent;
        cursor: pointer;
    }

    input:focus, input:active,
    button:focus, button:active {
        outline: none;
    }

    button::-moz-focus-inner {
        padding: 0;
        border: 0;
    }

    label {
        cursor: pointer;
    }

    legend {
        display: block;
    }

    table {
        width: 100%;
    }

    & .ant-select-dropdown {
        box-shadow: ${({theme})=>theme&&`0px 4px 10px ${theme.core.boxShadow}`}
    }
`;const borderRadius={roundedNon:"0px",roundedXS:"4px",roundedS:"8px",roundedM:"12px",roundedL:"16px",roundedXL:"20px",roundedFull:"99%"},shadow={base:"0px 0px 12px 0px rgba(14, 53, 42, .1)",active:"0px 0px 20px 0px rgba(14, 53, 42, .2)"},Breakpoints={maxMobile:`${390}px`,maxTablets:`${768}px`,maxLaptops:`${1024}px`,maxDesktops:`${1250}px`},size={headerL:"104px",headerS:"52px"},lightTheme={core:{colorPrimary:"#1C1C1C",colorSecondary:"#A18A68",colorTextPrimary:"#1C1C1C",colorTextSecondary:"#707070",colorDisabled:"#EFEFEF",colorErrorPrimary:"#C51400",colorAccentPrimary:"#D8D8D8",colorSurface:"#EFEFEF",colorSystem:"red",colorBackground:"#FFFFFF",colorDivider:"red",boxShadow:"#cecece"},borderRadius,shadow,size,breakpoints:Breakpoints},DarkTheme={core:{colorPrimary:"#ffffff",colorSecondary:"#B4A186",colorTextPrimary:"#ffffff",colorTextSecondary:"#9A9A9A",colorDisabled:"#EFEFEF",colorErrorPrimary:"#C51400",colorAccentPrimary:"#3D3D3D",colorSurface:"#272727",colorSystem:"red",colorBackground:"#000000",colorDivider:"red",boxShadow:"#373535"},borderRadius,shadow,size,breakpoints:Breakpoints},selectorThemeType=state=>state.theme.themeType;const ThemeSlice=(0,__webpack_require__("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs").Z0)({name:"theme",initialState:{themeType:"light"},reducers:{switchTheme:(state,{payload})=>{state.themeType=payload}}}),{switchTheme}=ThemeSlice.actions;ThemeSlice.reducer;var react=__webpack_require__("./node_modules/react/index.js");var react_redux=__webpack_require__("./node_modules/react-redux/dist/react-redux.mjs");const useAppSelector=react_redux.d4;var es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),ui=__webpack_require__("./src/shared/ui/index.ts");(()=>{const dispatch=(0,react_redux.wA)(),{t}=(0,es.Bd)(),theme=useAppSelector(selectorThemeType);return React.createElement(ui.l6,{value:theme,onSelect:value=>{dispatch(switchTheme(value))},options:OptionsTheme(t)})}).__docgenInfo={description:"",methods:[],displayName:"ThemeSwitcher"};var config_provider=__webpack_require__("./node_modules/antd/es/config-provider/index.js");const ThemeDecorator=({Story,context})=>{const currentTheme="dark"===context.globals.theme?DarkTheme:lightTheme;return react.createElement(styled_components_browser_esm.NP,{theme:currentTheme},react.createElement(config_provider.Ay,{theme:antdTheme(currentTheme)},react.createElement(Story,null)))};ThemeDecorator.__docgenInfo={description:"",methods:[],displayName:"ThemeDecorator",props:{Story:{required:!0,tsType:{name:"StoryFn"},description:""},context:{required:!0,tsType:{name:"StoryContext"},description:""}}};var i18next=__webpack_require__("./node_modules/i18next/dist/esm/i18next.js"),i18nextBrowserLanguageDetector=__webpack_require__("./node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js"),esm=__webpack_require__("./node_modules/i18next-http-backend/esm/index.js");i18next.Ay.use(esm.A).use(i18nextBrowserLanguageDetector.A).use(es.r9).init({fallbackLng:"ru",debug:!1,interpolation:{escapeValue:!1},backend:{loadPath:"/locales/{{lng}}/{{ns}}.json"}});const parameters={themes:{default:"light",list:[{name:"light",class:"theme-light",color:"#ffffff",default:!0},{name:"dark",class:"theme-dark",color:"#000000"}]}},decorators=[(Story,context)=>ThemeDecorator({Story,context})],storybook_preview={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}}}}},"./src/shared/ui/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$n:()=>Button,l6:()=>Select});var react=__webpack_require__("./node_modules/react/index.js"),es_button=__webpack_require__("./node_modules/antd/es/button/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const SButton=(0,styled_components_browser_esm.Ay)(es_button.Ay)`
  &:hover {
    transition: all 0.4s;
  }
`,Button=({children,...props})=>react.createElement(SButton,{"data-testid":"ButtonTestId",...props},children);Button.__docgenInfo={description:"",methods:[],displayName:"Button",composes:["ButtonPropsAntd","PropsWithChildren"]};var tabs=__webpack_require__("./node_modules/antd/es/tabs/index.js");(0,styled_components_browser_esm.Ay)(tabs.A)`
  & .ant-tabs-nav-more {
    display: none;
  }

  &.ant-tabs-top > .ant-tabs-nav {
    margin: 0 !important;
    padding: 0;
  }

  &.ant-tabs-nav-list {
    height: 50px;
  }

  & .ant-tabs-tab {
    padding: 0;
  }
`;var slider=__webpack_require__("./node_modules/antd/es/slider/index.js");(0,styled_components_browser_esm.Ay)(slider.A)`
  &.ant-slider-handle .ant-slider-handle-2 {
    transform: translateX(0) !important;
  }

  & .ant-slider-handle::after {
    width: 0 !important;
    height: 10px !important;
    background-color: black;
    border: none;
    border-radius: 0;
    margin: 0 4px;
  }
`;var es_select=__webpack_require__("./node_modules/antd/es/select/index.js");const SSelect=(0,styled_components_browser_esm.Ay)(es_select.A)``,Select=({...props})=>react.createElement(SSelect,props);Select.__docgenInfo={description:"",methods:[],displayName:"Select"}},"./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./shared/ui/Button/lib/button.stories":["./src/shared/ui/Button/lib/button.stories.tsx",219],"./shared/ui/Button/lib/button.stories.tsx":["./src/shared/ui/Button/lib/button.stories.tsx",219]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return __webpack_require__.e(ids[1]).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$",module.exports=webpackAsyncContext},"storybook/internal/channels":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"storybook/internal/client-logger":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"storybook/internal/preview-errors":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__},"storybook/internal/core-events":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/global":module=>{"use strict";module.exports=__STORYBOOK_MODULE_GLOBAL__},"storybook/internal/preview-api":module=>{"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__}},__webpack_require__=>{__webpack_require__.O(0,[783],(()=>{return moduleId="./storybook-config-entry.js",__webpack_require__(__webpack_require__.s=moduleId);var moduleId}));__webpack_require__.O()}]);
//# sourceMappingURL=main.abc48195.iframe.bundle.js.map