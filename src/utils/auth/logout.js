// import $one from '@/one-builder'

// export const logout = (fn) => {
//   switch ($one.context.env) {
//     case 'dev':
//       $one.uc.api.logout({
//         fn: () => {
//           window.location.replace(process.env.VUE_APP_LOGIN_URL);
//         }
//       });
//       break
//     case 'test':
//     case 'prod':
//     default: typeof fn === 'function' ? fn() : $one.uc.api.logout({
//       fn: () => {
//         // TODO: 现网地址的
//         window.location.replace(process.env.VUE_APP_HOST);
//       }
//     });
//   }
// }

export default (_) => {
    window.location.replace('/');
}