要安装 [web3.js](https://github.com/ethereum/web3.js) 这个库，花了不少时间，因为 Windows 平台上需要 .NET 的依赖，所以换到了 Ubuntu 系统才安装好。

然后发现我的 ubuntu 上没有安装 node，于是又花了一些时间配 node 环境，虽然配过几次，但总是忘，所以为了避免这种情况，再记录一遍。

##### Ubuntu 上面的 node 安装
1. 从 node 官网上下载 LTS 的压缩文件，然后解压。这步比较容易。

2. 配置环境变量
```
sudo vim ~/.bashrc
```
在最后面加上
```
export PATH=$PATH:/path/to/node/bin
# 这个 /path/to/node 是 node 文件夹的路径
```
再记录一下 vim 的一个命令，o 是另起一行并进入 Insert mode

3. 激活环境变量
```
source ~/.bashrc
```

4. 查看是否安装成功
```
node -v
```

总算是安装成功了～，然后开始使用，此时（2018年3月21日）web3.js 的版本是
1.0.0-beta.33

根据 [官方文档](http://web3js.readthedocs.io/en/1.0/getting-started.html) 的要求，需要起一个连到一个 node 服务上，使用 websocket 协议，所以又安装了 electron 和 ws，然后跑起来了之后，我就不知道怎么用了。文档上并没有提供 tutorial，所以就又搁置了，准备之后看看 example。
