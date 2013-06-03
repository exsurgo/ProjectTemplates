Sencha Architect Project Templates
----------------------------------

These templates are divided into the following categories for the **Ext** and **Touch** frameworks.

- **Basic** - Very simple, boilerplate templates.
- **Layouts** - Common application layouts.
- **Starter Apps** - Simple yet fully-functional apps.

[View Templates Live](http://exsurgo.github.io/ProjectTemplates/index.html)


**Rules for all templates**

- All templates should be as usable as possible.
- Use the least amount of code possible.
- Use camelCase for all functions, local vars, ref's, and clientId's.
- Use PascalCase/TitleCase for all classes (top-level views, not instances).
- Use all lowercase for aliases.
- Assign itemId to all components that need to be referenced.
- All classes should be assigned aliases.
- Selectors should use the parent user alias followed by the clientId where possible.  Ex: "mypanel #myButton".
- Custom CSS/styles should be avoided.
- Models should be single terms, such as Task, Person or Record.
- Stores and Controllers should be plural terms such as Tasks, People, Records.
- View should use verbose naming, such as TaskGrid, RecordForm, etc.
- Use detailed comments in controller code for new user education.
- All main view classes should be named MainView and have it's itemId set to mainView.
- Variables should be hoisted where appropriate. Proper tabbed formatting should be used and comments should be appended to end of line.  Example:
	<br/>
	<pre>var x = 1,  // First
        y = 2;  // Second</pre>
- Strings should use single quotes instead of double.

**Ext Specific Rules**
- A viewport should always be used as the top-level views for Ext.

**Touch Specific Rules**


