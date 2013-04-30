Sencha Architect Project Templates
----------------------------------

These templates are divided into the following categories for the **Ext** and **Touch** frameworks.

- **Basic** - Very simple, boilerplate templates.
- **Layouts** - Common application layouts.
- **Starter Apps** - Simple yet fully-functional apps.

[View Templates Live](http://exsurgo.github.io/ProjectTemplates/index.html)


**Rules for all templates**

- All templates should be as usable as possible
- Use the least amount of code possible.
- Use PascalCase/TitleCase for all classes (top-level views, not instances).
- Use lowercase for class aliases.
- Assign itemId to all components.  
- All classes should be assigned aliases.
- Selectors should use the parent user alias followed by the clientId where possible.  Ex: "mypanel #myButton"
- Custom CSS/Styles should be avoided.  
- Use detailed comments in controller code for new user education.
- All main view classes should be named MainView and have it's itemId set to mainView.

**Rules for Ext templates**
- A viewport should always be used as the top-level views for Ext.  

**Rules for Ext layout templates**
- Header and Footer should have height set to 100 and NOT resizable
- Left, Right, Center, Top, Bottom, etc, panels should be resizable

