/**
 * Create Layout class, which represents a page of
 * the application, and
 * 
 * 1. It has a protractor locator (.locator),
 *    e.g. by.css("body")
 * 2. It has a URL (.url), e.g. "/home" or "https://epam.com"
 * 3. It has a name (.name), e.g. "Document Page"
 * 4. It cannot have a parent element
 * 5. It can have children Elements (.children)
 * 6. It has a method to retrieve the root protractor element
 *    by the locator (.get([name])) or a child element
 *    by name in any depth
 * 7. It has a method to load the page, i.e. Navigates to
 *    the URL of it (.load())
 */

 const Element = require("./Element"); 


 
module.exports = class Layout extends Element{

        constructor(locator, name, url) {
            super(locator, name, url);
            
            
            this.name = 'Home';
            this.url = "http://epam.com";

            this.parent = null;
            this.children = {};
        }

        addChildren(child){
            if(this.children.hasOwnProperty(child.name)){
                throw new Error(child.name + " is already added!");
            }
            this.children[child.name] = child;
        }
        
}