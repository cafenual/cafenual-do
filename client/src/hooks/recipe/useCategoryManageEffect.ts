import {
  createCategoryAPI,
  deleteCategoryAPI,
  getCategoriesAPI,
  updateCategoryAPI,
} from "lib/api/category";
import { useEffect, useState } from "react";

export default function useCategoryManageEffect() {
  const [categories, setCategories] = useState([]);
  const [createCategoryInput, setCreateCategoryInput] = useState("");
  useEffect(() => {
    const getData = async () => {
      const categories = await getCategoriesAPI();
      setCategories(categories);
    };
    getData();
  }, []);

  const onChangeForAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreateCategoryInput(e.target.value);
  };

  // 카테고리 추가
  const onCreate = async (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const categories = await createCategoryAPI(createCategoryInput);
      setCategories(categories);
      setCreateCategoryInput("");
    } catch (e) {
      alert("카테고리 생성에 실패했습니다.");
    }
  };

  // 카테고리 삭제
  const onDelete = async (id: string | undefined) => {
    try {
      const categories = await deleteCategoryAPI(id);
      setCategories(categories);
    } catch (e) {
      alert("카테고리 삭제에 실패했습니다.");
    }
  };

  const [updateCategoryId, setUpdateCategoryId] = useState("");
  const [updateCategoryInput, setUpdateCategoryInput] = useState("");

  // 카테고리 수정 활성화
  const onUpdateActive = (categoryId: string, name: string) => {
    setUpdateCategoryId(categoryId);
    setUpdateCategoryInput(name);
  };

  // 카테고리 수정 input
  const onChangeForUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateCategoryInput(e.target.value);
  };

  // 카테고리 수정 취소
  const onUpdateCancel = () => {
    setUpdateCategoryId("");
  };

  // 카테고리 수정
  const onUpdate = async (categoryId: string) => {
    try {
      const categories = await updateCategoryAPI(
        categoryId,
        updateCategoryInput
      );
      console.log(categories);
      setCategories(categories);
      setUpdateCategoryId("");
    } catch (e) {
      alert("카테고리 수정에 실패했습니다.");
    }
  };
  return {
    categories,
    onChangeForAdd,
    createCategoryInput,
    onCreate,
    onDelete,
    updateCategoryId,
    updateCategoryInput,
    onUpdateActive,
    onChangeForUpdate,
    onUpdateCancel,
    onUpdate,
  };
}
