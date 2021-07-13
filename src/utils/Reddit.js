
const Reddit = {
    async getSubreddits(subreddit, limit=100) {
        const resp = await fetch(`https://www.reddit.com/r/${subreddit}.json?limit=${limit}`)
        const jsonResp = await resp.json()
        if (jsonResp.error) {
            return []
        }
        return jsonResp.data.children
    }
}


export default Reddit