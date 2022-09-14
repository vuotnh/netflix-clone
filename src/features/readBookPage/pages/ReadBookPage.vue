<template>
    <div class="ebook">
        <Flipbook class="flipbook" :pages="pages" :startPage="pageNum" v-slot="flipbook">
            <div class="control-bar">
                <el-button :disabled="!flipbook.canFlipLeft" @click="flipbook.flipLeft" circle>
                    <el-icon><ArrowLeftBold /></el-icon>
                </el-button>
                <el-button :disabled="!flipbook.canZoomIn" @click="flipbook.zoomIn" circle>
                    <el-icon><Plus /></el-icon>
                </el-button>
                <span class="page-num">
                    Page {{ flipbook.page }} of {{ flipbook.numPages }}
                </span>
                <el-button :disabled="!flipbook.canZoomOut" @click="flipbook.zoomOut" circle>
                    <el-icon><Minus /></el-icon>
                </el-button>
                    
                <el-button :disabled="!flipbook.canFlipRight" @click="flipbook.flipRight" circle>
                    <el-icon><ArrowRightBold /></el-icon>
                </el-button>
                
            </div>
        </Flipbook>
        
    </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Flipbook from 'flipbook-vue'
import { ArrowRightBold, ArrowLeftBold, Plus, Minus } from '@element-plus/icons-vue';
import { readBookModule } from '../store';
@Options({
    components: {
        Flipbook,
        ArrowRightBold,
        ArrowLeftBold,
        Plus,
        Minus
    }
})
export default class ReadBookPage extends Vue {
    pages = [null,
        "https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        "https://images.pexels.com/photos/2709385/pexels-photo-2709385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/2709385/pexels-photo-2709385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/3081752/pexels-photo-3081752.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/3083250/pexels-photo-3083250.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      ]

    get pageNum() {
        return readBookModule.currentPage || 1;
    }


    onFlipRightEnd(page: number) {
        console.log(page)
        window.location.hash = '#' + page
    }
    onFlipLeftEnd(page: number) {
        window.location.hash = '#' + page
    }

    
}
</script>
<style lang="scss" scoped>

.ebook{
    background-color: #333;
    height: 100vh;
}
.flipbook {
    margin-left: 5%;
    margin-right: 5%;
    width:90%;
    height: calc(100vh - 50px - 40px);
    ::v-deep(.flipbook-container){
        img {
            box-shadow: 1px 0px 0px 5px rgb(42, 41, 41);
        }
    }
        
}

.control-bar{
    padding-top: 20px;
    margin-bottom: 20px;
    color: white;
    ::v-deep(.el-button) {
        background-color: #999;
        border-color: #999;
        .el-icon {
            color: white;
        }
    }
}
.page-num{
    font-size: 16px;
    font-weight: 500;
    margin-left: 10px;
    margin-right: 10px;
}

@media only screen and (max-width: 100px){

}



</style>