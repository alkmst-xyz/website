---
title: GitHub Flavored Markdown (GFM)
description: Full example of GFM
date: 2022-03-06
tags:
  - markdown
  - github
layout: post.njk
---

GFM according to [github](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#headings).

## Headings

# H1

## H2

### H3

#### H4

##### H5

###### H6

## Styling text

| Style                  | Example                                |
| ---------------------- | -------------------------------------- |
| Bold                   | **This is bold text**                  |
| Italic                 | _This text is italicized_              |
| Strikethrough          | ~~This was mistaken text~~             |
| Bold and nested italic | **This text is _extremely_ important** |
| All bold and italic    | **_All this text is important_**       |
| Subscript              | <sub>This is a subscript text</sub>    |
| Superscript            | <sup>This is a superscript text</sup>  |

## Quoting text

Text that is not a quote

> Text that is a quote

## Quoting code

Use `git status` to list all new or modified files that haven't yet been committed.

Some basic Git commands are:

```shell
git status
git add
git commit
```

The background color should be `#ffffff` for light mode and `#0d1117` for dark mode.

| Style | Example              |
| ----- | -------------------- |
| HEX   | `#0969DA`            |
| RGB   | `rgb(9, 105, 218)`   |
| HSL   | `hsl(212, 92%, 45%)` |

## Links

This site was built using [GitHub Pages](https://pages.github.com/).

## Images

![This is an image](https://myoctocat.com/assets/images/base-octocat.svg)

## Lists

- George Washington
- John Adams
- Thomas Jefferson

1. James Madison
2. James Monroe
3. John Quincy Adams

4. First list item

   - First nested list item
     - Second nested list item

5. First list item
   - First nested list item

## Tasks Lists

- [x] #739
- [ ] https://github.com/octo-org/octo-repo/issues/740
- [ ] Add delight to the experience when all tasks are complete :tada:

- [ ] \(Optional) Open a followup issue

## Using emoji

@octocat :+1: This PR looks great - it's ready to merge! :shipit:

## Footnotes

Here is a simple footnote[^1].

A footnote can also have multiple lines[^2].

You can also use words, to fit your writing style more closely[^note].

[^1]: My reference.
[^2]:
    Every new line should be prefixed with 2 spaces.  
    This allows you to have a footnote with multiple lines.

[^note]:
    Named footnotes will still render with numbers instead of the text but allow easier identification and linking.  
    This footnote also has been made with a different syntax using 4 spaces for new lines.

## Collapsed section

<details>
<summary>Collapsed section</summary>
<p>

```ruby
  puts "Hello World"
```

</p>
</details>

## Writing mathematical expressions

- This sentence uses `$` delimiters to show math inline: $\sqrt{3x-1}+(1+x)^2$
- This expression uses `\$` to display a dollar sign: $\sqrt{\$4}$
- To split <span>$</span>100 in half, we calculate $100/2$

### Writing expressions as blocks

**The Cauchy-Schwarz Inequality**

$$\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)$$
