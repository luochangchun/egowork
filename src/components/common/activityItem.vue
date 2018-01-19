<template>
    <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" class="item">
        <router-link class="item" :to="{ name: 'activity', params: { id: activity.id} }">
            <div class="rel">
                <div class="img_wrap rel"> <span class="abs flag f12">已结束</span> <img src="http://www.egowork.com/themes/newego/img/01.png" alt="">
                    <p class="tc white abs text-ellipsis-muti text-ellipsis-2"> {{activity.title}} </p>
                </div>
                <div class="para">
                    <p class="f14" style="height:40px">{{activity.title}}</p>
                    <p class="f12">活动时间： <span>{{activity.activeTime | formatDate}}</span> </p>
                </div>
                <div class="top_line" style="width: 0px"></div>
                <div class="bottom_line" style="width: 0px;"></div>
                <div class="left_line" style="height: 0px;"></div>
                <div class="right_line" style="height: 0px;"></div>
            </div>
        </router-link>
    </el-col>
</template>

<script>
import { formatDate } from "../../../static/js/date.js";
export default {
  props: ["activity"],
  filters: {
    formatDate(time) {
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd");
    }
  }
};
</script>

