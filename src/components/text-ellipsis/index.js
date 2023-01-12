import TextEllipsis1 from '@/components/text-ellipsis/text-ellipsis1';
import TextEllipsis2 from '@/components/text-ellipsis/text-ellipsis2';
import TextEllipsis3 from "@/components/text-ellipsis/demo/gok-text-ellipsis1"
import { ref } from '@vue/composition-api';

function useTextEllipsis () {
  const introduce = ref('这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这' +
    '是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是1是' +
    '这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是1' +
    '这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是1' +
    '这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是1' +
    '这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是1' +
    ''
 );

  return {
    introduce
  }
}

export {
  TextEllipsis1,
  TextEllipsis2,
  TextEllipsis3,
  useTextEllipsis
}
