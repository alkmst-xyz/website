---
title: My third post (yay!)
date: '2021-10-06'
description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
category: dev
tags:
  - programming
slug: post-3
draft: true
---

Here, some code :)

## Some Python

```python
def prepend_path(self, name: str, paths: List[str]) -> None:
	old_val = self.env.get(name)
	paths = [p for p in paths if isdir(p)]
	if not paths:
		return
	if old_val is not None:
		new_val = ':'.join(itertools.chain(paths, [old_val]))
	else:
		new_val = ':'.join(paths)
	self.env[name] = new_val
```

## Some JavaScript Diff

```diff-js
// this is a command
function myCommand() {
    let counter = 0;
-	counter--;
+	counter++;
}

// Test with a line break above this line.
console.log('Test');
```
