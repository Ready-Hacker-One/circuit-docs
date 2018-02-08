webpackJsonp([0x9547e75747c7],{525:function(e,t){e.exports={data:{componentMetadata:{edges:[{node:{displayName:"ButtonGroup",description:{text:"Groups its Button children into a list and adds margins between."},props:[{name:"children",description:{text:"Buttons to group."},required:!0,type:{value:{name:"custom",raw:"Button"},name:"arrayOf"},defaultValue:null}]}},{node:{displayName:"CloseButton",description:{text:"A generic close button."},props:[{name:"selector",description:{text:"An ID rendered as data-selector attribute on the\ncomponent. Used for tracking and e2e testing."},required:!0,type:{value:null,name:"string"},defaultValue:null}]}},{node:{displayName:"HtmlElement",description:null,props:[{name:"element",description:{text:'The HTML element that should be returned. If a function is passed,\nthe function needs to return a string for an HTML element (i.e., \'button\').\nThe function is called with all component props except "element" and "children".\nSee the Button component for an example of how to use this.'},required:!0,type:{value:[{name:"string"},{name:"func"}],name:"union"},defaultValue:null},{name:"blacklist",description:{text:"A hash of props that should not be forwarded as attributes to the HTML element.\nPrevents React from complaining about invalid attribute values."},required:!1,type:{value:{name:"bool"},name:"objectOf"},defaultValue:{value:"{}"}},{name:"children",description:{text:"Child nodes to be rendered."},required:!1,type:{value:[{name:"arrayOf",value:{name:"node"}},{name:"node"}],name:"union"},defaultValue:{value:"null"}}]}},{node:{displayName:"IconInputWrapper",description:{text:"Used to wrap inputs or selects that have an icon overlay. Takes two\nrender props (input and icon)."},props:[{name:"theme",description:null,required:!1,type:{value:null,name:"custom"},defaultValue:null},{name:"input",description:{text:"Render prop that should render the element receiving an\nicon overlay (i.e, input or select). Receives a\nclassName prop that adds appropriate padding on the\nside of the icon."},required:!0,type:{value:null,name:"func"},defaultValue:null},{name:"icon",description:{text:"Render prop that should render the overlay icon or element.\nReceives a className and a disabledClassName prop. className\npositions the icon according to the iconPosition prop.\ndisabledClassName can be used on the icon to update the icon\nstyle when the input is disabled."},required:!0,type:{value:null,name:"func"},defaultValue:null},{name:"selector",description:{text:"An ID rendered as data-selector attribute on the\ncomponent. Used for tracking and e2e testing."},required:!0,type:{value:null,name:"string"},defaultValue:null},{name:"iconPosition",description:{text:"Position the icon render prop should show. Affects the\nclassName passed to the render prop."},required:!1,type:{value:[{value:"'left'",computed:!1},{value:"'right'",computed:!1}],name:"enum"},defaultValue:{value:"'left'"}}]}},{node:{displayName:"Checkbox",description:{text:"Checkbox component for forms."},props:[{name:"onToggle",description:{text:"Controles/Toggles the checked state."},required:!1,type:{value:null,name:"func"},defaultValue:{value:"() => {}"}},{name:"children",description:{text:"Child nodes to be rendered as the label."},required:!1,type:{value:null,name:"custom"},defaultValue:{value:"null"}},{name:"value",description:{text:"Value string for input."},required:!0,type:{value:null,name:"string"},defaultValue:null},{name:"name",description:{text:"A unique ID used to link the input and label."},required:!0,type:{value:null,name:"string"},defaultValue:null},{name:"checked",description:{text:"Triggers checked styles on the component. This is also forwarded as\nattribute to the <input> element."},required:!1,type:{value:null,name:"bool"},defaultValue:{value:"false"}},{name:"invalid",description:{text:"Triggers error styles on the component."},required:!1,type:{value:null,name:"bool"},defaultValue:{value:"false"}},{name:"disabled",description:{text:"Triggers disabled styles on the component. This is also forwarded as\nattribute to the <input> element."},required:!1,type:{value:null,name:"bool"},defaultValue:{value:"false"}},{name:"selector",description:{text:"An ID rendered as data-selector attribute on the\ncomponent. Used for tracking and e2e testing."},required:!0,type:{value:null,name:"string"},defaultValue:null}]}},{node:{displayName:"TextOrButtonElement",description:null,props:[]}},{node:{displayName:"ListElement",description:null,props:[]}},{node:{displayName:"LoadingBar",description:{text:"Loading bar component to indicate progress"},props:[{name:"max",description:{text:"A number greater than zero, indicating how much work the task requires."},required:!1,type:{value:null,name:"number"},defaultValue:{value:"1.0"}},{name:"value",description:{text:"A number between 0 and max, indicating how much of the task has been\ncompleted."},required:!1,type:{value:null,name:"number"},defaultValue:{value:"0"}},{name:"size",description:{text:"Size"},required:!1,type:{value:[{value:"'kilo'",computed:!1},{value:"'mega'",computed:!1},{value:"'giga'",computed:!1}],name:"enum"},defaultValue:{value:"'kilo'"}},{name:"children",description:{text:"Child nodes to be rendered as the label."},required:!1,type:{value:null,name:"custom"},defaultValue:{value:"null"}}]}},{node:{displayName:"PasswordInput",description:{text:"PasswordInput component for forms."},props:[{name:"selector",description:null,required:!0,type:{value:null,name:"string"},defaultValue:null},{name:"placeholder",description:{text:"Placeholder string for this input."},required:!1,type:{value:null,name:"string"},defaultValue:{value:"'Password'"}},{name:"disabled",description:{text:"Should the input be rendered as disabled?"},required:!1,type:{value:null,name:"bool"},defaultValue:{value:"false"}}]}},{node:{displayName:"Select",description:{text:"A native select component."},props:[{name:"selector",description:{text:"An ID rendered as data-selector attribute on the\ncomponent. Used for tracking and e2e testing."},required:!0,type:{value:null,name:"string"},defaultValue:null},{name:"onChange",description:{text:"onChange handler, called when the selection changes."},required:!0,type:{value:null,name:"func"},defaultValue:null},{name:"name",description:{text:"Name of the select form element."},required:!0,type:{value:null,name:"string"},defaultValue:null},{name:"options",description:{text:"Options to select from."},required:!0,type:{value:{name:"shape",value:{value:{name:"union",value:[{name:"string"},{name:"number"}],required:!0},label:{name:"string",required:!1},disabled:{name:"bool",required:!1}}},name:"arrayOf"},defaultValue:null},{name:"disabled",description:{text:"Styles the select as disabled."},required:!1,type:{value:null,name:"bool"},defaultValue:{value:"false"}},{name:"value",description:{text:'Currently selected value. Matches the "value" property of\nthe options objects. If value is falsy, Select will render\nthe "placeholder" prop as currently selected.'},required:!1,type:{value:[{name:"string"},{name:"number"}],name:"union"},defaultValue:{value:"null"}},{name:"placeholder",description:{text:"String to show when no selection is made."},required:!1,type:{value:null,name:"string"},defaultValue:{value:"'Select an option'"}}]}},{node:{displayName:"State",description:null,props:[{name:"initial",description:null,required:!0,type:{value:null,name:"any"},defaultValue:null},{name:"name",description:null,required:!0,type:{value:null,name:"string"},defaultValue:null},{name:"updaterName",description:null,required:!0,type:{value:null,name:"string"},defaultValue:null},{name:"updater",description:null,required:!0,type:{value:null,name:"func"},defaultValue:null},{name:"children",description:null,required:!0,type:{value:null,name:"func"},defaultValue:null}]}},{node:{displayName:"RadioButton",description:{text:"RadioButton component for forms."},props:[{name:"onToggle",description:{text:"Controles/Toggles the checked state."},required:!1,type:{value:null,name:"func"},defaultValue:{value:"() => {}"}},{name:"children",description:{text:"Child nodes to be rendered as the label."},required:!1,type:{value:null,name:"custom"},defaultValue:{value:"null"}},{name:"value",description:{text:"Value string for input."},required:!0,type:{value:null,name:"string"},defaultValue:null},{name:"name",description:{text:"A unique ID used to link the input and label."},required:!0,type:{value:null,name:"string"},defaultValue:null},{name:"checked",description:{text:"Triggers checked styles on the component. This is also forwarded as\nattribute to the <input> element."},required:!1,type:{value:null,name:"bool"},defaultValue:{value:"false"}},{name:"invalid",description:{text:"Triggers error styles on the component."},required:!1,type:{value:null,name:"bool"},defaultValue:{value:"false"}},{name:"disabled",description:{text:"Triggers disabled styles on the component. This is also forwarded as\nattribute to the <input> element."},required:!1,type:{value:null,name:"bool"},defaultValue:{value:"false"}},{name:"selector",description:{text:"An ID rendered as data-selector attribute on the\ncomponent. Used for tracking and e2e testing."},required:!0,type:{value:null,name:"string"},defaultValue:null}]}},{node:{displayName:"SearchInput",description:{text:"SearchInput component for forms."},props:[{name:"selector",description:{text:"An ID rendered as data-selector attribute on the\ncomponent. Used for tracking and e2e testing."},required:!0,type:{value:null,name:"string"},defaultValue:null},{name:"disabled",description:{text:"Triggers disabled styles on the component. This is also forwarded as\nattribute to the <input> element."},required:!1,type:{value:null,name:"bool"},defaultValue:{value:"false"}}]}},{node:{displayName:"Toggle",description:{text:"A toggle component with support for labels and additional explanations."},props:[{name:"label",description:null,required:!1,type:{value:null,name:"string"},defaultValue:{value:"null"}},{name:"explanation",description:null,required:!1,type:{value:null,name:"string"},defaultValue:{value:"null"}},{name:"margin",description:null,required:!1,type:{value:null,name:"bool"},defaultValue:{value:"true"}}]}},{node:{displayName:"Tooltip",description:{text:"A Tooltip wrapper in order to show tooltips on top of other\ncomponents."},props:[{name:"children",description:null,required:!0,type:{value:null,name:"node"},defaultValue:null},{name:"content",description:{text:"The content inside of the tooltip being shown."},required:!0,type:{value:null,name:"node"},defaultValue:null},{name:"align",description:{text:"The alignment of the tooltip.\nIt can be right, left or centered."},required:!1,type:{value:[{value:"Tooltip.Center",computed:!0},{value:"Tooltip.Right",computed:!0},{value:"Tooltip.Left",computed:!0}],name:"enum"},defaultValue:{value:"Tooltip.Center"}}]}},{node:{displayName:"DummyIcon",description:null,props:[]}},{node:{displayName:"CardHeader",description:null,props:[{name:"children",description:{text:"Heading and/or CloseButton for closing."},required:!0,type:{value:{name:"element"},name:"arrayOf"},defaultValue:null},{name:"onClose",description:{text:"Callback for the close button. If not specified, the button won't\nbe shown."},required:!1,type:{value:null,name:"func"},defaultValue:{value:"null"}}]}},{node:{displayName:"Switch",description:{text:"A simple Switch component."},props:[{name:"on",description:{text:"Is the Switch on?"},required:!1,type:{value:null,name:"bool"},defaultValue:{value:"false"}},{name:"onToggle",description:{text:"Toggle callback used as onClick."},required:!1,type:{value:null,name:"func"},defaultValue:{value:"() => {}"}}]}}]}},pathContext:{}}}});
//# sourceMappingURL=path---component-f467df9c85773eb5ab2c.js.map