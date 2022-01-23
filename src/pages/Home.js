import PostCard from '../components/Postcard/PostCard'

const titleData = [
    {
        title: '자바스크립트 공부 1',
        text: '자바스크립트 공부시작...'
    },
    {
        title: '자바스크립트 공부2',
        text: '자바스크립트 공부 2일차...'
    }
]


function Home() {
    return (
        <div style={{ display: 'flex', margin: '80px 0 0 100px' }}>
            <PostCard title={titleData[0].title}></PostCard>
            <PostCard title={titleData[1].title}></PostCard>
        </div>
    )
}
export default Home