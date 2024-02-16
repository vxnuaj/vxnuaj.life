---
title: 'NeuroFocus'
date: '2023-11-23'
---
**[Github](https://github.com/vxnuaj/NeuroFocus) · [Article](https://medium.com/@vxnuaj/how-to-supercharge-your-mind-with-a-neurofeedback-system-09bce15d4c47) · [Demo](https://youtu.be/iw1inophIt0?si=dYRiP00SRncu-o0S)**

I built a Neurofeedback System, using OpenBCIs [Ganglion board](https://shop.openbci.com/products/ganglion-board), to track your focus via EEG to output a simple focus metric.

**Libraries**: [Pandas](https://pandas.pydata.org/), [NumPy](https://numpy.org/), [Matplotlib](https://matplotlib.org/), & [Brainflow](https://brainflow.org/). 

**Hardware**: [OpenBCI Ganglion](https://shop.openbci.com/products/ganglion-board) & [OpenBCI Headband Kit](https://shop.openbci.com/products/openbci-eeg-headband-kit)

With 4 EEG electrodes attatched (@ FP1, FP2, T5, T6), the Ganglion board collects raw EEG data. 

The pipeline filters the data using a bandstop butterworth filter between 58-62 Hz and a bandpass bessel filter between 11-31 Hz. 

The filtered data is then classified using Brainflow's pretrained machine learning model to output a focus score.

Feel free to replicate it :)