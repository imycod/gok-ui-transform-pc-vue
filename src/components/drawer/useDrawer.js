import router from '@/router';
import MASK_MAP from '@/utils/map/mask-map';

function useDrawer() {
  function openDrawer() {
    const route = router.currentRoute;
    router.push({
      path: route.path,
      query: Object.assign(
        { ...route.query },
        { mask_path: MASK_MAP.getKey("DRAWER_EXAM_TEST_ADD") }
      ),
    });
  }
  function closeDrawer() {
    router.go(-1);
  }

  return {
    openDrawer,
    closeDrawer
  }
}

export default useDrawer
