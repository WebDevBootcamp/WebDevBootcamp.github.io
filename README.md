WebDevBootcamp Website
========================

### Intro

This site uses [jekyll](http://jekyllrb.com/) specifically github's flavor of jekyll called [pages](https://pages.github.com/).

* Great intro atricle to [blogging with jekyll](https://help.github.com/articles/using-jekyll-with-pages)
* Github pages [dependency versions page](https://pages.github.com/versions/)

### Setup

NO setup is required. If you do want to test your changes locally then you need to run Jekyll.

#### Installing Jekyll Locally (optional)

**For Linux, Unix or Mac OS X:** [Installation](http://jekyllrb.com/docs/installation/)

**For Window:** [Installation](http://jekyllrb.com/docs/windows/)
  
  * Walk through [setup](http://www.madhur.co.in/blog/2011/09/01/runningjekyllwindows.html)
  * Up to date [guide](https://github.com/juthilo/run-jekyll-on-windows/)
  * guide with [lots of pictures](http://ntotten.com/2012/03/02/github-pages-with-jekyll-local-development-on-windows/)
  
#### Running (optional)

on the command line in the root of the project (this folder)

```bash
  
  jekyll serve -w
  
```

### Creating your own section

#### For Students

Create a folder under 'students/spring2014' perferably following the first letter and last name in all lowercase.

To start blogging create a _posts folder in your newly created user directory.

To write a post just create a file with the following format 'YYYY-MM-DD-Blog-Post-Title.{extension}'

The extension you use will determine how your blog page is parsed. (md, textile or html).

Each post should have meta data associated with it. See the Metadata section.


### Metadata

* __layout__: defines the template to use. use `post` for default.
* __title__: The title of your blog post
* __author__: Author name (optional)
* __authorLink__: can be a url or a relative path ie: /students/spring2014/{folder} (optional)
* __tags__: space separated tags that describe the content of your post
* __published__: set to true if you want it visible
* __summary__: A brief description (optional)
* __image__: url to an image to show above your content (optional)

** Example: **

```yml

    layout: post
    title: How-to Write a Post
    author: Nathan White
    authorLink: /instructors/nw
    tags: howto general
    published: true
    summary: A quick test
    image: http://placehold.it/900x300

```
