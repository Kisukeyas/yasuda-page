export const getArticle = async () => {
  try {
    const res = await fetch(`${window.location.origin}/api/article`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (!res.ok) {
      // レスポンスが失敗（200-299 以外の範囲のステータス）したときに次の処理を実行する　サーバーエラーの時などに次の処理を実行する
      throw new Error(res.statusText)
    }
    const data = await res.json()
    return data
  } catch (e) {
    throw new Error('Get Timeline Network or Server Error')
  }
}
