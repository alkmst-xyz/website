---
title: My last post (oh no!)
description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
date: 2022-03-06
tags: programming
layout: post.njk
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

## Some CPP

```cpp
void EngineExplorer::listEngines()
{
    m_engines->clear();
    KPluginInfo::List engines = m_engineManager->listDataEngineInfo(m_app);
    qSort(engines);

    foreach (const KPluginInfo engine, engines) {
        m_engines->addItem(QIcon::fromTheme(engine.icon()), engine.pluginName());
    }

    m_engines->setCurrentIndex(-1);
}
```
