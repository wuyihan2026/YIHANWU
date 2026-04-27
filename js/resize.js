
// 防抖函数
function debounce(func, wait = 10) {
    let timeout;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, arguments);            
        }, wait);
    };
}

// 处理尺寸变化的函数
function handleResize() {
    console.log(`窗口尺寸已变化: ${window.innerWidth} x ${window.innerHeight}`);
    if(window.innerWidth < window.innerHeight*1.33)
    {
        $('body').removeClass('h').addClass('v');
    }
    else{
        $('body').removeClass('v').addClass('h');
    }
    $('.face-title').css('width',$('body').width() - $('.face-img').width() + 'px');
    // 在这里添加响应逻辑
}

// 创建防抖版本的处理函数
const debouncedHandleResize = debounce(handleResize, 200);

// 添加事件监听
window.addEventListener('resize', handleResize);

// 初始调用一次获取当前尺寸

$(function(){handleResize();});
setTimeout(function(){ handleResize(); },500);