---
title: 'MNE for ADHD'
date: '2024-01-01'
---
**[Github](https://github.com/vxnuaj/mneprocess) · [Article](https://medium.com/@vxnuaj/using-mne-to-characterize-adhd-d5540438dcf3) · [Demo](https://www.youtube.com/watch?v=uzCuzB5ixn8)**

My goal was to learn more about the signal processing and analysis of ADHD EEG data, in order to develop a technical skillset and gain an understanding of the underlying mechanisms of ADHD.

I got an EEG of ADHD patients and used [MNE-Python](https://mne.tools/) to filter & clean the dataset to calculate the *theta:beta* EEG band ratio, which is an [indicator of ADHD symptoms](https://journals.sagepub.com/doi/10.1177/1087054712460087?url_ver=Z39.88-2003&rfr_id=ori:rid:crossref.org&rfr_dat=cr_pub++0pubmed) in the [frontal lobes](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7330615/).

**Libraries**: [MNE](https://mne.tools/), [NumPy](https://numpy.org/), [SciPy](https://https://www.scipy.org/), & [Matplotlib](https://matplotlib.org/). 

EEG data is loaded, and processed from the time domain to the frequency domain. The data is filtered to exclude powerline frequency (50 Hz), and then epoched to remove noisy segments.

**[Independent Component Analysis](https://en.wikipedia.org/wiki/Independent_component_analysis)** is performed to unmix the data for further processing and cleaning.

After examining the PSD & topographic map of the EEG, the *theta:beta* band ratio is computed to characterize the dataset.