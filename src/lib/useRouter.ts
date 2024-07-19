import {
  useRouter as useBaseRouter,
  usePathname,
  useSearchParams,
} from "next/navigation";
import NProgress from "nprogress";
import { useEffect } from "react";

export function useRouter() {
  const router = useBaseRouter();

  const { push } = router;

  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    NProgress.done();
  }, [pathname, searchParams]);

  router.push = async (...args: Parameters<typeof push>) => {
    if (args[0] !== pathname && args[0] !== "#") {
      NProgress.start();
    }
    return push(...args);
  };

  return router;
}
