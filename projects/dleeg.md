---
title: 'Deep Learning for EEG Classification'
date: '2024-02-11'
---
**[Github](https://github.com/vxnuaj/DRNN-Replicate) · [Article](https://medium.com/intuition/deep-recurrent-neural-networks-for-electroencephalography-analysis-7c428c50f038) · [Demo](https://www.youtube.com/watch?v=c7TVeXEaxqE)**


I found that EEG based diagnostics were prone to many fallacies, resulting in a *[~21% chance of making a diagnostic error!](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3965251/)*

This got me curious about the use of *[deep learning](https://en.wikipedia.org/wiki/Deep_learning) models* to be leveraged to improve EEG based diagnostic systems.

I came accross ChronoNet, *["A Deep Recurrent Neural Network for Abnormal EEG Identification"](https://arxiv.org/abs/1802.00308).*

To learn more and begin to gain a skillset in deep learning, I took the replicated code for ChronoNet, broke it down for understanding, and reconstructed it for myself.

**Libraries**: [PyTorch](https://pytorch.org/docs/stable/index.html), [PyTorch Lightning](https://lightning.ai/docs/pytorch/stable/), [SciPy](https://www.scipy.org/), [MNE](https://mne.tools/), [NumPy](https://numpy.org/), [SciKit-Learn](https://scikit-learn.org/). 

ChronoNet's architecture is interestingly a combination of inception blocks, taking inspiration from *[Inception](https://arxiv.org/abs/1409.4842)*, and densely connected layers, taking inspiration from *[DenseNet](https://arxiv.org/abs/1608.06993)*.

If you want a high level overview of the code, read **[this](https://medium.com/intuition/deep-recurrent-neural-networks-for-electroencephalography-analysis-7c428c50f038#:~:text=recurrent%20neural%20networks%3F-,What%20are%20DRNNs%3F,-A%20Deep%20Recurrent)**.