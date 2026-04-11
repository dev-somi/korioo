import { redirect } from "next/navigation";

export default function TutorPage() {
    // 사용자가 /tutor 로 들어오면 바로 /tutor/dashboard 로 튕겨줍니다.
    redirect("/tutor/dashboard");
}