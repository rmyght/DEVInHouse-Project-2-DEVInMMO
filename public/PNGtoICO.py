from PIL import Image

import os
from pathlib import Path

filename  = Path(str(os.path.dirname( __file__ )) + '/favicon.png')
# filename = r'opmrun.png'

img = Image.open(filename)
icon_sizes = [(16,16), (32, 32), (48, 48), (64,64)]

pathsave = Path(str(os.path.dirname( __file__ )) + '/favicon.ico')

img.save(pathsave, format="ICO", sizes=icon_sizes)