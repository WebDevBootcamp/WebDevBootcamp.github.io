---
layout: post
title: How-to Write a Post
author: Nathan White
authorLink: /instructors/nw
category: howto
tags: howto
published: true
summary: Blogging has never been so easy!
comments: true
---

__View the [source](https://raw.githubusercontent.com/WebDevBootcamp/WebDevBootcamp.github.io/master/_posts/2014-05-24-Write-a-Post.md).__

____

Every blog post needs to end up inside of a `_posts` folder with a name that follows the following format:

<pre>
  YYYY-MM-DD-Blog-Post-Title.extension
</pre>

The extension type determines the parser used to generate the blog post. html, md, markdown or textile are all currently supported. This particular blog post is written in markdown ([see source](https://raw.githubusercontent.com/WebDevBootcamp/WebDevBootcamp.github.io/master/_posts/2014-05-24-Write-a-Post.md)).

It is important when creating your blog post that you specify metadata about your post.

### Metadata

* __layout__: defines the template to use. use `post` for default.
* __title__: The title of your blog post
* __author__: Author name (optional)
* __authorLink__: can be a url or a relative path ie: /students/spring2014/{folder} (optional)
* __tags__: space separated tags that describe the content of your post
* __published__: set to true if you want it visible
* __summary__: A brief description (optional)
* __image__: url to an image to show above your content (optional)
* __comments__: true (optional)
* __userid__: for grouping posts

__Example:__

<pre>
---
layout: post
title: How-to Write a Post
author: Nathan White
authorLink: /instructors/nw
tags: howto general
published: true
summary: A quick test
image: http://placehold.it/900x300
comments: true
userid: nw
---
</pre>




#### Publishing

fork this [repo](https://github.com/WebDevBootcamp/WebDevBootcamp.github.io) and once your changes are made push your changes and issue a pull request.


__Happy Blogging__
