//importing types & utils
import { NextPage } from 'next';
import { seoConfig } from '../../utils';
//importing components
import Link from 'next/link';
import ProductDetails from '../../components/ProductDetails';
import SEO from '../../components/SEO';
import { useRouter } from 'next/router';

const Product: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <SEO {...seoConfig} />
      <main className="wrapper py-4">
        <Link href="/" passHref>
          <div className="btn btn-light my-3">Go Back</div>
        </Link>
        <ProductDetails pageId={id} />
      </main>
    </>
  );
};

export default Product;
