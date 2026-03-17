<p align="center">
  <h1 align="center">EVLF: Early Vision-Language Fusion for Generative Dataset Distillation</h1>
  <p align="center">
    <a href="#">Wenqi Cai</a>,
    <a href="#">Yawen Zou</a>,
    <a href="#">Guang Li</a>,
    <a href="#">Chunzhi Gu</a>,
    <a href="#">Chao Zhang</a>
  </p>
  <p align="center">
    University of Toyama &nbsp;&nbsp;
    Hokkaido University &nbsp;&nbsp;
    University of Fukui
  </p>
  <p align="center">
    <a href="https://arxiv.org/abs/2603.07476">
      <img src="https://img.shields.io/badge/Paper-arXiv-red?style=flat&logo=arXiv&logoColor=red" alt="Paper">
    </a>
    <a href="https://wenqi-cai297.github.io/earlyfusion-for-dd/" style="padding-left: 0.5rem;">
      <img src="https://img.shields.io/badge/Project-Page-blue?style=flat&logo=Google%20chrome&logoColor=blue" alt="Project Page">
    </a>
    <a href="https://github.com/wenqi-cai297/earlyfusion-for-dd" style="padding-left: 0.5rem;">
      <img src="https://img.shields.io/badge/Code-GitHub-black?style=flat&logo=github" alt="Code">
    </a>
  </p>
</p>

---

# EVLF

This repository contains the official implementation and project page for:

> **EVLF: Early Vision-Language Fusion for Generative Dataset Distillation**

---

## 🔥 Overview

Dataset distillation (DD) aims to synthesize compact datasets that preserve model performance with significantly fewer samples.  
Recent diffusion-based DD methods typically inject semantic guidance during denoising, which often leads to **prompt dominance** and **visual degradation**.

We propose **Early Vision-Language Fusion (EVLF)**:

- 🧠 Fuse vision and language **before diffusion**
- 🔄 Enable **semantic and visual co-evolution**
- 🎯 Improve **fidelity, diversity, and downstream accuracy**

---

## 🚀 Key Features

- **Early Fusion** instead of late-stage conditioning  
- **Cross-attention alignment** between image and text embeddings  
- **Plug-and-play design** compatible with LDMs and DiTs  
- Consistent gains across:
  - ImageNette
  - ImageWoof
  - ImageIDC
  - CIFAR-10/100
  - ImageNet-1K  

---

## 📊 Results Highlights

- 📈 **+4.9%** on ImageNette (vs D4M)
- 📈 **+9.6%** on ImageIDC (low IPC)
- 📈 **+8.1%** on CIFAR-10 (IPC=10)
- 🏆 SOTA performance on ImageNet-1K distillation

EVLF also improves:

- ✔ Visual coherence  
- ✔ Semantic alignment  
- ✔ Distribution coverage  

---

## 📂 Code

👉 Official repository:  
https://github.com/wenqi-cai297/earlyfusion-for-dd

---

## 📄 Paper

👉 arXiv:  
https://arxiv.org/abs/2603.07476

---

## 📌 Citation

If you find this work useful, please cite:

```bibtex
@inproceedings{cai2026evlf,
  title={EVLF: Early Vision-Language Fusion for Generative Dataset Distillation},
  author={Cai, Wenqi and Zou, Yawen and Li, Guang and Gu, Chunzhi and Zhang, Chao},
  booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
  year={2026}
}
