import { useNavigate } from 'react-router';

export const usePageNavigation = () => {
  const navigate = useNavigate();

  // 뒤로가기
  const goBack = () => {
    navigate(-1);
  };

  // 홈/목록으로 이동
  const goHome = () => {
    navigate('/', { replace: true});
  };

  // 글쓰기 페이지로 이동
  const goNew = () => {
    navigate('/new');
  };

  // 특정 상세 페이지로 이동 (id 전달)
  const goDetail = (id) => {
    navigate(`/travel/${id}`);
  };

  // 수정 페이지로 이동 (id 전달)
  const goEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  return {
    goBack,
    goHome,
    goNew,
    goDetail,
    goEdit,
  };
};