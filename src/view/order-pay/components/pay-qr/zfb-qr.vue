<template>
  <iframe :srcdoc="$attrs.qrContent"
          frameborder='no'
          border='0'
          marginwidth='0'
          marginheight='0'
          scrolling='no'
          width='200'
          height='200'
          security='restricted'>
  </iframe>
</template>
