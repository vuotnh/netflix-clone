<template>
    <el-dialog :model="isShowBookFormDialog" custom-class="new-book-form" :lock-scroll="false" title="Upload new book" :modal="false">
        <div class="book-name">
            <div class="name-content">Name of Book</div>
            <el-input></el-input>
        </div>
        <div class="book-info">
            <div class="row">
                <div class="book-author col-md-6">
                    <div class="author-content">Author</div>
                    <el-input></el-input>
                </div>
                <div class="book-page col-md-6">
                    <div class="page-content">Num page of Book</div>
                    <el-input></el-input>
                </div>
            </div>
        </div>
        
        <el-upload action="#" class="image-uploader" :show-file-list="true" multiple v-model:file-list="uploadedFiles"  auto-upload="false">
            <el-button type="primary">Select book images</el-button>
            <template #tip>
            <div class="el-upload__tip">
                jpg/png files with a size less than 500KB.
            </div>
            </template>
        </el-upload>
        
        
    </el-dialog>
</template>
<script lang="ts">
import { IMAGE_ACCEPTED_FILE_TYPES } from '@/common/constants';
import { IFile } from '@/common/interfaces';
import { Options, Vue } from 'vue-class-component'
import { Model } from 'vue-property-decorator';

@Options({
    components: {
    }
})
export default class CreateNewBook extends Vue {
    @Model('value', { type: Boolean }) isShowBookFormDialog!: boolean;
    acceptFileType = IMAGE_ACCEPTED_FILE_TYPES.join(',');
    uploadedFiles = [] as IFile[];
}
</script>
<style lang="scss" scoped>
.book-name{
    display: flex;
    .name-content{
        width: 150px;
    }
    ::v-deep(.el-input){
        width: 85%;
        .el-input__wrapper{
            border-radius: 15px;
        }
    }
}
.book-info{
    margin-top: 10px;
}
.col-md-6, .col-md-6{
    display: flex;
    ::v-deep(.el-input){
        .el-input__wrapper{
            border-radius: 15px;
        }
    }
}
.book-author{
    .author-content{
        width: 150px;
    }
    ::v-deep(.el-input){
        width: 70%;
    }
}
.book-page{
    .page-content{
        width: 150px;
    }
    ::v-deep(.el-input){
        width: 70%;
    }
}
</style>