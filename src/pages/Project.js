import PostCard from '../components/Postcard/PostCard'

const titleData = [
    {
        title: '리액트 프로젝트 시작하기',
        text: 'create-react-app'
    },
    {
        title: '리액트 프로젝트 2일차',
        text: '컴포넌트 만들기'
    }
]

function Project() {
    return(
        <div style={{ display: 'flex', margin: '80px 0 0 100px' }}>
            <PostCard title={titleData[0].title}></PostCard>
            <PostCard title={titleData[1].title}></PostCard>
        </div>
    )
}
export default Project