---
layout: default
title: Tips and tricks
nav_order: 9
---

# Tips and tricks
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## See all services access trough minikube proxy

```bash
$ minikube service list
```

## Reset minikube

```bash
$ minikube stop
$ minikube delete
```

## Debug a pod
```bash
$ kubectl exec -ti [POD_NAME] -- ash
```
