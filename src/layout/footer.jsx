// 引入 footer的 样式
// import className from '../assets/styles/footer.styl'
import '../assets/styles/footer.styl'
// 底部的区域
export default {
  data () {
    return {
      author: 'smyhvae'
    }
  },
  render () {
    return (
      <div id="footer">
        <span>Written by {this.author}</span>
      </div>

    //    <div id={className.footer}>
    //      <span>Written by {this.author}</span>
    //    </div>
    )
  }
}
