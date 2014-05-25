---
layout: post
title: Embedding Gists
author: Nathan White
authorLink: /instructors/nw
tags: gists
published: true
summary: Quick code formating with the help of github gists.
comments: true
userid: nw 
---

<img src="https://cdn.tutsplus.com/net/uploads/legacy/2018_sexyCodeSnippetManagement/sexy-code-snippet-management-with-gists.png" class="img-responsive pull-right">

Including code snippets for review or explaination is pretty easy with the help of gists.

### Creating a Gist

Goto [gist.github.com](http://gist.github.com). You should see a text editor with an area to add a description on the top. Either write or copy and paste your code snippet into the textarea. Don't forget to provide a name for the file along with the target language (will auto detect from file extensions).

Once your content is ready. Click the "Create Gist" button. This should generate a custom url (page) for your code snippet [as seen here](https://gist.github.com/nw/bcc9ee1e5d22ab952778) (https://gist.github.com/nw/bcc9ee1e5d22ab952778).

We are going to use a part of that to embed into our blog post. The `username/gist-id`.


{% raw %}
<pre>{% gist nw/bcc9ee1e5d22ab952778 %}</pre>
{% endraw %}

and the result:

{% gist nw/bcc9ee1e5d22ab952778 %}