import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Node, Project } from '../models/node';
import { SidenavDataService } from '../services/sidenav-data.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  projects: Project[] = [];

  treeControl = new NestedTreeControl<Node>(node => node.children);
  dataSource = new MatTreeNestedDataSource<Node>();

  constructor(private projectService : SidenavDataService) {}

  hasChild = (_: number, node: Node) => !!node.children && node.children.length > 0;

  ngOnInit(): void {
    this.refreshProjects();
  }

  refreshProjects(){
    this.projects = [];
    this.projectService.getAllProjects().subscribe((res: any)=>{
      this.projects = res;
    });
  }

  OnProjectSelect(uri: string){
    this.dataSource.data = [];
    this.projectService.getProjectDetails(uri).subscribe((res: any)=>{
      this.dataSource.data = res;
    });
  }
}
