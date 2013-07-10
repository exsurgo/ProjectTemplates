Sencha Architect Project Templates
----------------------------------

These templates are divided into the following categories for the **Ext** and **Touch** frameworks.

- **Basic** - Very simple, boilerplate templates.
- **Layouts** - Common application layouts.
- **Starter Apps** - Simple yet fully-functional apps.

[View Templates Live](http://exsurgo.github.io/ProjectTemplates/index.html)


**Creating Templates**

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
- Do not include personalized project settings such as URL prefix and indention.

**Ext Specific Rules**
- A viewport should always be used as the top-level views for Ext.


**Preview Images**

Each template should contain a preview image named "preview.png" located in the project folder.
  
- For desktop or tablet targeted templates, the size should be roughly 800x600.
- For phone targeted tempaltes, the size should be roughly 320x480.
- The browser zoom may need to be ajdusted.

**Template Data**

Each template should contain a data file named "template.json" which describes the template with the following fields.

- title: Short name/description, < 40 characters (required)
- description: Longe description, < 80 characters (optional)
- category: "Basic", "Layouts" or "Starter Apps"

**Building Templates** 

Use the following steps to build the templates and include in architect.

1. Open architect locally in dev mode.
2. Download the template repo to your local machine.
3. From the chrome debug console, run the following commands.
<code>
	Ext4.require('xds.util.ProjectTemplateBuilder');
	xds.util.ProjectTemplateBuilder.buildAll();
</code> 
4. When promted, select the directory of your local templates repo.
