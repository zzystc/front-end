function limitRequest(urls = [], limit = 3) {
    return new Promise((reslove, reject) => {
        const len = urls.length
        let count = 0

        while (limit > 0){
            start()
            limit -= 1
        }
        function start() {
            const url = urls.shift()
            if (url) {
                axios.post(url).then(res => {
                    // todo
                }).catch(err => {
                    // todo
                }).finally(() => {
                    if (count == len - 1) {
                        // 最后一个任务完成
                        resolve()
                    } else {
                        // 完成之后，启动下一个任务
                        count++
                        start()
                    }
                })
            }
        }
    })
}

limitRequest(['http://xxa','http://xxb','htt[://xxc','htt[://xxd','htt[://xxe'])