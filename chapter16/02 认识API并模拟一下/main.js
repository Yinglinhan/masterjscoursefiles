

async function test(){
  const response = await fetch('https://console-mock.apipost.cn/app/mock/project/8dcbedb7-e91e-4cd3-8301-8b4a788de906/test',{
    method: 'GET'
  })

  console.log(await response.json())
}

test()
