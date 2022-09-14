<template>
    <div class="header">
        <div class="button-menu" @click="toggleSideBar">
            <img class="img-fluid ic-menu" src="../../assets/ic-menu.png" style="width: 28px; height: 28px;"/> 
        </div>
        <img class="img-fluid" src="../../assets/ic-film.png" style="width: 40px; height: 40px;"/>
        <div class="search-box">
            <el-input
                class="w-50 m-2"
                size="large"
                placeholder="Please Input"
                :suffix-icon="Search"
            />
            
        </div>
        <div class="helper-button">
            <el-button circle @click="showBookForm"> <el-icon><Plus /></el-icon></el-button>
            <el-button>Login</el-button>
        </div>
        <CreateNewBook v-model="isShowBookFormDialog"/>
    </div>
</template>
<script lang="ts">
import CreateNewBook from '@/features/homePage/components/CreateNewBook.vue';
import { appModule } from '@/plugins/vuex/appModule';
import { Search, Menu, Plus } from '@element-plus/icons-vue'
import { Options, Vue } from 'vue-class-component'

@Options({
    components: {
        Search,
        Menu, 
        Plus,
        CreateNewBook,
    }
})
export default class MainHeader extends Vue {
    isShowBookFormDialog = false;
    Search = Search;

    showBookForm(){
        this.isShowBookFormDialog = true;
    }
    toggleSideBar() {
        appModule.setIsCollapseSidebar();
    }
}
</script>
<style lang="scss" scoped>
.header {
    width: 100%;
    height: 60px;
    background: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.button-menu {
    margin-left: 25px;
    display: flex;
    align-items: center;
    .ic-menu {
        margin-right: 35px;
        width: 28px !important;
        height: 28px !important;
    }
}
.search-box {
    width: 80%;
    ::v-deep(.el-input) {
        .el-input__wrapper{
            border-radius: 20px;
        }
    }
}

// style dialog
::v-deep(.el-dialog) {
    border-radius: 20px;
    background-color: rgba(255, 255,255, 0.9);
    .el-dialog__title {
        font-size: 30px;
        font-weight: 700;
    }
}
</style>