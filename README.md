kaggle-drc-viewer
=================

Image viewer for the Kaggle Diabetic Retinopathy Challenge

### Usage
Clone this repository into your data directory (alongside the `train` directory containing the training images).
```
.
└── data
    ├── train
	└── kaggle-drc-viewer
```
From the `data` directory, start a web server with the command `python -m SimpleHTTPServer`

Open a web browser and navigate to http://localhost:8000/kaggle-drc-viewer

### Controls

Scroll the mousewheel while hovering over one of the viewports to cycle through the images. 

Click a button to change the selected level.

### Screenshot
![Imgur](http://i.imgur.com/XaNYzzs.jpg)