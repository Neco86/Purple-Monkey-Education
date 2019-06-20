import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { actionCreators } from './store'
import NavBar from '../../../../../common/components/NavBar'
import { SearchResultWrapper } from './style'
import NoItem from '../../../components/NoItem'
import Search from '../../../components/Search'

class SearchPage extends Component{
render(){
        const { searchResut,goToDetail,changePage } = this.props;
         return(
            <div>
                <NavBar
                title="课程"
                func={()=>{changePage(0)}}
                />
                <div style={{height:"45px"}}/>
                <SearchResultWrapper>
                    <div className="result">相关课程</div>
                    {searchResut.size===0?
                    <NoItem 
                    content={["暂无相关课程"]}
                    />
                    :
                    searchResut.map((item,index)=>(<Search key={index} item={item} onClick={(key)=>{goToDetail(key);}}/>))
                    }
                </SearchResultWrapper>
            </div>
        )
    }
componentDidMount(){
    this.props.getSearch(this.props.search)
}
}
const mapDispatchToProps=(dispatch)=>{
        return {
        goToDetail(key){
            dispatch(actionCreators.setSearchClickKey(key))
            dispatch(actionCreators.changePage(2))
        },
        getSearch(search){
            dispatch(actionCreators.getSearch(search))
        },
        changePage(page){
            dispatch(actionCreators.changePage(page))
        }
    }
}
const mapStateToProps=(state)=>{
    return {
        searchResut:state.getIn(['h1p1','searchResut']),
        search:state.getIn(['h1p1','search']),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(SearchPage));