---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

Hi! I’m Hongbo Kang (康洪菠), a Ph.D. candidate at Tianjin University supervised by Prof. [Kun Li](https://cic.tju.edu.cn/faculty/likun/index.html). I also maintain a long-term research collaboration with Prof. [Yu-Kun Lai](https://users.cs.cf.ac.uk/Yukun.Lai/) from Cardiff University. I received my Master’s degree from Chongqing University of Technology, where I was jointly supervised by Prof. Yong Wang and Prof. [Wenming Yang](https://www.sigs.tsinghua.edu.cn/ywm/list.htm) from Tsinghua University. I completed my undergraduate studies at Jishou University. My research focuses on 3D vision, specifically human-related motion reconstruction and generation. If you are seeking any form of academic collaboration, please contact me at [hbkang@tju.edu.cn](mailto:hbkang@tju.edu.cn).
> 🕒 This page was last updated in Sep 2025.
<!-- My research interest includes neural machine translation and computer vision. I have published more than 100 papers at the top international AI conferences with total <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'>google scholar citations <strong><span id='total_cit'>260000+</span></strong></a> (You can also use google scholar badge <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>). -->


# 🔥 News
- *2025.08*: &nbsp;🎉 One paper accepted to TPAMI 2025.
- *2025.07*: &nbsp;🎉 One paper accepted to ICCV 2025.
- *2025.05*: &nbsp;🎉 One paper accepted to TMM 2025.
- *2024.09*: &nbsp;📌 I started my Ph.D. in Prof. [Kun Li](https://cic.tju.edu.cn/faculty/likun/index.html)'s team at Tianjin University.
- ...

# 📝 Publications 
\* Co-first author, ✉️ Corresponding author.
<!-- DyCrowd -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TPAMI 2025</div><img src='../images/publications/DyCrowd.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[**DyCrowd: Towards Dynamic Crowd Reconstruction from a Large-scene Video**](https://arxiv.org/abs/2508.12644v1)

Hao Wen\*, **Hongbo Kang\***, Jian Ma, Jing Huang, Yuanwang Yang, Haozhe Lin, Yu-Kun Lai, Kun Li✉️

IEEE Transactions on Pattern Analysis and Machine Intelligence, 2025 

[**\[Project Page \]**](https://cic.tju.edu.cn/faculty/likun/projects/DyCrowd/index.html)[**\[Code\]**](https://github.com/KHB1698/DyCrowd) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
</div>
</div>


<!-- RESCUE -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICCV 2025</div><img src='../images/publications/RESCUE.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[**RESCUE: Crowd Evacuation Simulation via Controlling SDM-United Characters**](https://arxiv.org/abs/2507.20117)

Xiaolin Liu\*, Tianyi Zhou\*, **Hongbo Kang**, Jian Ma, Ziwen Wang, Jing Huang, Wenguo Weng, Yu-Kun Lai, Kun Li✉️

International Conference on Computer Vision, 2025 <span style="color: red; font-weight: bold;">(Highlight)</span>

[**\[Project Page \]**](https://cic.tju.edu.cn/faculty/likun/projects/RESCUE/index.html)[**\[Code\]**](https://github.com/xiaolin0314/RESCUE) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
</div>
</div>

<!-- DC-GCT -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TMM 2025</div><img src='../images/publications/dcgct.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[**Double-chain Graph Convolution Transformer for 3D Human Pose Estimation**](https://arxiv.org/abs/2308.05298)

**Hongbo Kang**, Yong Wang✉️, Mengyuan Liu, Doudou Wu, Peng Liu, Wenming Yang

IEEE Transactions on Multimedia, 2025

[**\[Code\]**](https://github.com/KHB1698/DC-GCT) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
</div>
</div>

<!-- DRPose -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICASSP 2024</div><img src='../images/publications/DRPose.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[**Diffusion-based Pose Refinement and Multi-Hypothesis Generation for 3D Human Pose Estimation**](https://arxiv.org/abs/2401.04921)

**Hongbo Kang**, Yong Wang✉️, Mengyuan Liu, Doudou Wu, Peng Liu, Xinlin Yuan, Wenming Yang

International Conference on Acoustics, Speech, and Signal Processing, 2024

[**\[Code\]**](https://github.com/KHB1698/DRPose) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
</div>
</div>

<!-- GLSTE -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TMM 2023</div><img src='../images/publications/glste.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[**Global and local spatio-temporal encoder for 3D human pose estimation**](https://ieeexplore.ieee.org/abstract/document/10269070)

Yong Wang\*, **Hongbo Kang\*✉️**, Doudou Wu, Wenming Yang, Longbin Zhang

IEEE Transactions on Multimedia, 2023

[**\[Code\]**](https://github.com/KHB1698/GLSTE) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
</div>
</div>

<!-- ICFNet -->
<div class='paper-box'>
<div markdown="1">
[**ICFNet: Interactive-complementary fusion network for monocular 3D human pose estimation**](https://www.sciencedirect.com/science/article/abs/pii/S0925231224017181)

Yong Wang, Peng Liu, **Hongbo Kang**, Doudou Wu, Duoqian Miao

Neurocomputing, 2025
</div>
</div>

<!-- HIN -->
<div class='paper-box'>
<div markdown="1">
[**Hierarchical flow learning for low-light image enhancement**](https://www.sciencedirect.com/science/article/pii/S2352864824001585)

Xinlin Yuan, Yong Wang, Yan Li, **Hongbo Kang**, Yu Chen, Boran Yang

Digital Communications and Networks, 2024
</div>
</div>


# 🎖 Honors and Awards
- *2024.06* Outstanding Graduate Student of Chongqing (Top 1%)
- *2023.10* National Scholarship (Top 1%)


# 🎓 Academic Service
- Journal Reviewer: TMM, PR, etc.
- Conference Reviewer: MM, ICASSP.


<!-- # 📖 Educations
- *2019.06 - 2022.04 (now)*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2015.09 - 2019.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 

# 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/)

# 💻 Internships
- *2019.05 - 2020.02*, [Lorem](https://github.com/), China. -->



<div class='paper-box'>
<div style="width: 400px; margin: 20px auto; transform: scale(0.8);">
<script type="text/javascript" id="clustrmaps" src="//clustrmaps.com/map_v2.js?d=2olqXOZJM4rIl9TMPkMp7LhhCme2cAS84jr3abw_DjY&cl=ffffff&w=a"></script>
</div>
</div>


