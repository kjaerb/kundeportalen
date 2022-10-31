import { getAddressById } from "@/server/common/getAddress";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function AdressPage() {
  const router = useRouter();
  const [address, setAddress] = useState<any>();

  useEffect(() => {
    if (router.query.id) {
      getAddressById(router.query.id as string).then((res) =>
        setAddress(res.data[0])
      );
    }
  }, [router.isReady, router.query.id]);

  return <div>{address && address.adressebetegnelse}</div>;
}

export default AdressPage;
