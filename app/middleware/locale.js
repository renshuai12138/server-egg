// app/middleware/locale.js
module.exports = (options, app) => {
    return async function locale(ctx, next) {
      // 获取语言参数，默认为英文
      const lang = ctx.query.lang || 'en';
  
      // 设置语言到全局变量中，方便模板渲染使用
      ctx.state.lang = lang;
  
      // 根据语言参数设置响应头
      switch (lang) {
        case 'zh':
          ctx.set('Content-Language', 'zh-CN');
          break;
        case 'en':
          ctx.set('Content-Language', 'en-US');
          break;
      }
  
      await next();
    };
  };
  
  // config/config.default.js
  module.exports = {
    middleware: ['locale'],
  };
  