# The Odin Project - To-Do List

## <a href="https://sehyunlee217.github.io/TOP_to-do-list/">Live Preview</a>

### Basic Task Adding functionality
https://github.com/sehyunlee217/TOP_to-do-list/assets/121660178/fb35b936-90f7-47d5-8188-ebfbcba18c93

### Adding multiple tasks, showing tasks in order/separating tasks without due date
https://github.com/sehyunlee217/TOP_to-do-list/assets/121660178/ca7ac856-4b12-4fdc-b4dc-1c291a613ab5



### Deleting multiple tasks, sorted by groups
https://github.com/sehyunlee217/TOP_to-do-list/assets/121660178/f478acf7-2326-4bac-b85e-57f3252ed950

#
1. Main functionality of To-Do List
-  Able to store task/group name
-  Tasks are displayed in sequential order and will show due dates
-  Tasks that have no due date are displayed separately 
-  Able to add groups, display tasks associated with certain groups
-  Menu bar displays all tasks, tasks for today, and for the next 7 days
#
2. Used LocalStorageAPI to:
- Store tasks and group names entered by user in JSON string format
- When needed, retrieved data by parsing, then sort data by task(object) or groupname(string)
- Tasks and group names are stored in browser after refresh/closing
#
3. Other:
- Used <a href="http://getskeleton.com/">Skeleton Boilerplate</a> for basic CSS structure.
- Webpack deployed to gh-pages by predeploying "npm run build" and deploying "gh-pages -d dist". 
#

## Web Development Progress @ <a href="https://www.theodinproject.com/">The Odin Project</a>

- <a href="https://sehyunlee217.github.io/TOP_Landing-Page/">First Project - Landing Page</a> [HTML | CSS] - Basic Flexbox
- <a href="https://sehyunlee217.github.io/TOP_Rock-Paper-Scissors-Game/">Second Project - Rock Paper Scissors Game</a> [HTML | CSS | JS] - Basic JavaScript
- <a href="https://sehyunlee217.github.io/TOP_Calculator/">Third Project - Calculator</a> [HTML | CSS | JS] - Functions, HTML events
- <a href="https://sehyunlee217.github.io/TOP_Sign-Up-Form/">Forth Project - Sign-up Form</a> [HTML | CSS] - CSS Forms 
- <a href="https://sehyunlee217.github.io/TOP_Admin-Dashboard/">Fifth Project - Admin Dashboard</a> [HTML | CSS] - CSS Grid & Nesting Grid/Flexbox]
- <a href="https://sehyunlee217.github.io/TOP_Library/">Sixth Project - Library</a> [HTML | CSS | JS] - JavaScript Objects & Object Constructors
- <a href="https://sehyunlee217.github.io/TOP_Tic-Tac-Toe/">Seventh Project - Tic Tac Toe</a> [HTML | CSS | JS] - JavaScript Modules & Factory Functions
- <a href="https://sehyunlee217.github.io/TOP_Restaurant/">Eight Project - Restaurant Page</a> [HTML | CSS | JS | npm | Webpack] - ES6 Modules & Webpack
- <a href="https://sehyunlee217.github.io/TOP_to-do-list/">Ninth Project - To-Do List</a> [HTML | CSS | JS | npm | Webpack] - LocalStorageAPI & Webpack
