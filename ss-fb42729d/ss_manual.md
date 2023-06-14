## 准备阶段
打开系统的terminal app, 然后使用如下`cd` (change directory的缩写) 命令指定使用ss程序所在文件夹.
```bash
cd the_path_containing_ss
```

mac系统推荐下载一下vscode (visual studio code)并使用vscode内置的terminal (vscode里按`` ctrl+` ``)来代替系统的terminal，它对颜色支持好一些，系统自带的terminal里 `ss` 程序显示的东西颜色会混乱（比如经常变成浅灰色），不过其实也不影响使用。

## 画图
画图命令因为目前同时依赖于C++和python所以需要用两个命令
```bash
./ss plot_ss diagram_name
```

```bash
python3 plot.py diagram_name
```

国祯的机器需要用python3.11来代替python3。

在terminal其实可以使用 `&&` 符号做到一行同时运行两个命令。如下命令等价于依次运行以上两条命令：
```bash
./ss plot_ss diagram_name && python3 plot.py diagram_name
```

## 添加differential
如下命令可以在`spectra`里的`(stem, s)`里添加`d_r(x)=dx`. 其中`x`与`dx`的值需要要去谱序列网页里查看点的信息。
```bash
./ss add_diff <spectra> <stem> <s> <r> <x> <dx> [diagram_name]
```

上面`<>`只是说明这个参数是必输参数，`[]`说明这个参数可以省略，上面`diagram_name`的默认值可以在根目录里的`ss.json`文件里设置，比如在该`json`文件里如果写着`"default": "abc"`就表示不写`diagram_name`时默认使用`abc`.

##  推导differential
如下命令表示尝试确定`stem_min<=stem<=stem_max`范围内的未知differential. 在diagram_name的文件夹内还有一个`ss.jon`，这个文件夹描述了spectra及map等，以及`"deduce": "on/off"`的选项可以调整在推导时跳过哪些spectra (因为run一遍比较久想赶时间时可以选择这么做)。
```bash
./ss deduce diff <stem_min> <stem_max> [diagram_name]
```


