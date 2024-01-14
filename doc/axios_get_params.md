# 前言
在使用axios请求的过程中，get请求需要传数组的情况：
```
const params = {
  page: 1,
  size: 10,
  ids: [69, 71]
}
export function getMetricList(params) {
  return axios.get(`/xxx/metrics`, {
    params,
  });
}
```
此时看到的控制台network中这一项的请求是这样：
```
/xxx/metrics?ids[]=69&ids[]=71@page=1@size=10
```

# 序列化

axios显示直接传数组去get请求时是 ids[]=69&ids[]=71

我们如果想要没有 [] 连接的格式，就需要进行参数序列化

使用qs.stringify，设置axios配置项中的 paramsSerializer

```
import qs from 'qs';
export function getMetricList(params) {
  return axios.get(`/xxx/metrics`, {
    params,
    paramsSerializer: params => {
      return qs.stringify(params, { indices: false })
    }
  });
}
```

再次重新请求得到想要的格式：

```
/xxx/metrics?ids=69&ids=71@page=1@size=10
```


# 扩展:qs.stringify
```
qs.stringify({ids: [1, 2, 3]}, { indices: false })
//  ids=1&ids=2&ids=3

qs.stringify({ids: [1, 2, 3]}, { indices: true })
//  ids[0]=1&ids[1]=2&id[2]=3

qs.stringify({ids: [1, 2, 3]}, {arrayFormat: 'repeat'}) 
// ids=1&ids=2&ids=3

qs.stringify({ids: [1, 2, 3]}, {arrayFormat: 'brackets'})
 // ids[]=1&ids[]=2&ids[]=3

qs.stringify({ids: [1, 2, 3]}, {arrayFormat: 'indices'})
// ids[0]=1&ids[1]=2&ids[2]=3

qs.stringify({ids: [1, 2, 3]}, {arrayFormat: 'comma'}) 
// ids[0]=1&ids[1]=2&ids[2]=3
```