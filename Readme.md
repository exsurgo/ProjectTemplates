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
- Use camelCase for all functions, local vars, ref's, and clientId's
- Use PascalCase/TitleCase for all classes (top-level views, not instances).
- Use all lowercase for aliases.
- Assign itemId to all components that need to be referenced.
- All classes should be assigned aliases.
- Selectors should use the parent user alias followed by the clientId where possible.  Ex: "mypanel #myButton"
- Custom CSS/Styles should be avoided.  
- Use detailed comments in controller code for new user education.
- All main view classes should be named MainView and have it's itemId set to mainView.
- Strings should use single quotes instead of double
- Variables should be hoisted where appropriate. Proper tabbed formatting should be used and comments should be appended to end of line.  Ex
	<code>
	var x = 1,	// First<br/>
		y = 2;	// Second<br/>
	</code>
	
**Rules for Ext templates**
- A viewport should always be used as the top-level views for Ext.  

**Rules for Ext layout templates**
- Header and Footer should have height set to 100 and NOT resizable
- Left, Right, Center, Top, Bottom, etc, panels should be resizable

